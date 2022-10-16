import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export function LinkButton({
  children,
  ...props
}: ButtonProps & { href: string }) {
  return (
    <ChakraButton
      size="sm"
      as="a"
      mr={2}
      target={"_blank"}
      variant="outline"
      borderColor={"brand.1000"}
      color="brand.1000"
      borderRadius={0}
      _hover={{ backgroundColor: "brand.100" }}
      w="full"
      h="14"
      {...props}
    >
      {children}
    </ChakraButton>
  );
}
