import {
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { RefObject } from "react";
import { useRaf } from ".";

const baseWidth = 48;
const distanceLimit = baseWidth * 6;
const beyondTheDistanceLimit = distanceLimit + 1;

const distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.25,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.25,
  distanceLimit,
];

const factor = (increment: number) => {
  const step = 8;
  const toValue = increment * step + baseWidth;
  return toValue / baseWidth;
};

export const useDockAnimation = (
  mouseX: MotionValue<number | null>,
  ref: RefObject<HTMLImageElement>,
  magnification = 3
) => {
  const distance = useMotionValue(beyondTheDistanceLimit);

  const widthOutput = [
    baseWidth,
    baseWidth * factor(magnification * 0.5),
    baseWidth * factor(magnification * 1),
    baseWidth * factor(magnification * 2),
    baseWidth * factor(magnification * 1),
    baseWidth * factor(magnification * 0.5),
    baseWidth,
  ];

  const widthPX: MotionValue<number> = useSpring(
    useTransform(distance, distanceInput, widthOutput),
    {
      stiffness: 1300,
      damping: 82,
    }
  );

  useRaf(() => {
    const el = ref.current;
    const mouseXVal = mouseX.get();
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect();

      const imgCenterX = rect.left + rect.width / 2;

      const distanceDelta = mouseXVal - imgCenterX;
      distance.set(distanceDelta);
      return;
    }

    distance.set(beyondTheDistanceLimit);
  }, true);

  return { width: widthPX };
};
