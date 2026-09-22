import { describe, expect, it } from "vitest";
import { getCaptionAnchorPosition } from "./captionStyle";

describe("getCaptionAnchorPosition", () => {
	it("maps caption percentages to frame coordinates", () => {
		expect(getCaptionAnchorPosition({ positionX: 25, positionY: 75 }, 1920, 1080, 100)).toEqual(
			{ x: 480, y: 760 },
		);
	});
});
