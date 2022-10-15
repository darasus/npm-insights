import { Box, BoxProps } from "@chakra-ui/react";

export function Card({ children, ...props }: BoxProps) {
  return (
    <Box overflow={"hidden"} borderWidth="thin" {...props}>
      {children}
    </Box>
  );
}
