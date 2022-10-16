import { token } from "../token";

export function Logo() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 6L11 21M21 6L11 11M21 6L11 0.999997L0.999992 6M0.999992 6L11 11M0.999992 6L11 21M11 11L11 21"
        stroke={token.color.brand}
      />
    </svg>
  );
}
