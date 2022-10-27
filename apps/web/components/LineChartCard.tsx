import { ResponsiveContainer, AreaChart, Area, Tooltip, Line } from 'recharts'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { Card } from './Card'
import { format } from 'date-fns'
import { usePkgId } from '../hooks/usePkgId'
import { formatKbs, formatNumber } from '../utils/formatKbs'
import { token } from '../token'
import { Spinner } from 'ui'

interface Props {
  dataKey: string
  label: string
  description: string
  data?: Array<Record<string, number | string>>
  isLoading?: boolean
}

const CustomTooltip = ({ active, payload, label, data, key }: any) => {
  const pkgId = usePkgId()

  const getLabel = () => {
    if (data[label].date) {
      return {
        data: formatNumber(payload[0].value),
        label: format(new Date(data[label].date), 'MMM d yyyy'),
      }
    }
    if (data[label].version) {
      return {
        data: formatKbs(payload[0].value),
        label: `${pkgId}@${data[label].version}`,
      }
    }
    return null
  }

  if (active && payload && payload.length) {
    return (
      <div className="border-2 border-brand-1000 p-2 bg-background-1000">
        <div>
          <span>{getLabel()?.label}</span>
        </div>
        <div>
          <span className="font-black">{getLabel()?.data}</span>
        </div>
      </div>
    )
  }

  return null
}

export function LineChartCard({
  dataKey,
  label,
  description,
  data = [],
  isLoading,
}: Props) {
  const showData = !isLoading && data.length > 0
  const showError = !isLoading && data.length === 0

  return (
    <div className="h-full w-full">
      <Card className="flex flex-col h-full w-full">
        {isLoading && (
          <div className="flex items-center justify-center h-full w-full flex-col">
            <Spinner />
            <div>
              <span className="text-sm px-2 text-center leading-normal">
                Generating package data...
              </span>
            </div>
          </div>
        )}
        {showData && (
          <>
            <div className="flex flex-col items-center pt-4">
              <span className="font-black text-2xl">{label}</span>
              <span className="text-brand-900">{description}</span>
            </div>
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <Area
                  type="monotoneX"
                  dataKey={dataKey}
                  stroke={token.color.brand}
                  strokeWidth={2}
                  fill={`${token.color.brand + '50'}`}
                  activeDot={{
                    r: 5,
                    fill: token.color.background,
                    strokeWidth: 2,
                    stroke: token.color.brand,
                  }}
                />
                <Tooltip
                  cursor={false}
                  content={<CustomTooltip data={data} />}
                />
              </AreaChart>
            </ResponsiveContainer>
          </>
        )}
        {showError && (
          <div className="flex items-center justify-center flex-col h-full w-full">
            <XCircleIcon width={30} height={30} />
            <span className="text-sm text-center px-4">
              Unfortunately no data is available for this package.
            </span>
          </div>
        )}
      </Card>
    </div>
  )
}
