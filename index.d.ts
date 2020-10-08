declare type CoachMarkProps = {
  /**
   * shape of hole
   * default: "circle"
   */
  shape: "circle" | "rect";

  /**
   * position x
   * default: 0
   */
  x: number;

  /**
   * position y
   * default: 0
   */
  y: number;

  /**
   * background color of overlay
   * default: "#000"
   */
  backgroundColor?: string;

  /**
   * opacity of background overlay
   * default: 0.7
   */
  opacity?: number;

  /**
   * width of rectangle
   * default: 100
   */
  width?: number;

  /**
   * height of rectangle
   * default: 100
   */
  height?: number;

  /**
   * border radius for rectangle
   * default: 10
   */
  borderRadius?: number;

  /**
   * radius of circle
   * default: 100
   */
  radius?: number;
};

export default function CoachMark(props: CoachMarkProps): null;
