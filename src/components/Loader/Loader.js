import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({ isLoading }, sized = 14) {
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  console.log(isLoading);
  return (
    <ClipLoader
      loading={isLoading}
      css={override}
      size={sized}
      color={"green"}
    />
  );
}
