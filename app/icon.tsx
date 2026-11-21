
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#17283F",
          borderRadius: 14,
          color: "#F2F4F1",
          fontSize: 29,
          fontWeight: 800,
          letterSpacing: "-2px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        MS
      </div>
    ),
    {
      ...size,
    }
  );
}
