import { Box, BoxProps } from "@chakra-ui/react";

export function Card({ children, ...props }: BoxProps) {
  return (
    <Box
      overflow={"hidden"}
      bg="white"
      borderWidth="thin"
      borderColor="gray.200"
      {...props}
    >
      {children}
    </Box>
  );
}
