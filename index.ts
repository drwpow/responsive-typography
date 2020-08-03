export const defaultScale = {
  // primary type scale

  u18: "11.390625em",
  u17: "9.950627481136905em",
  u16: "8.692673779389363em",
  u15: "7.59375em",
  u14: "6.63375165409127em",
  u13: "5.795115852926242em",
  u12: "5.0625em",
  u11: "4.422501102727513em",
  u10: "3.8634105686174953em",
  u9: "3.375em",
  u8: "2.9483340684850083em",
  u7: "2.575607045744997em",
  u6: "2.25em",
  u5: "1.9655560456566725em",
  u4: "1.7170713638299977em",
  u3: "1.5em",
  u2: "1.3103706971044482em",
  u1: "1.1447142425533319em",
  d1: "0.8735804647362989em",
  d2: "0.7631428283688879em",
  d3: "0.6666666666666666em",
  d4: "0.5823869764908659em",
  d5: "0.5087618855792586em",
  d6: "0.4444444444444444em",
  d7: "0.3882579843272439em",
  d8: "0.3391745903861724em",
  d9: "0.2962962962962963em",
  d10: "0.2588386562181626em",
  d11: "0.22611639359078162em",
  d12: "0.19753086419753085em",
  d13: "0.17255910414544176em",
  d14: "0.15074426239385438em",
  d15: "0.13168724279835392em",
  d16: "0.11503940276362785em",
  d17: "0.10049617492923625em",
  d18: "0.0877914951989026em",

  // root resets (use these sparingly if needed to reset component font sizes, etc.)

  u18r: "11.390625rem",
  u17r: "9.950627481136905rem",
  u16r: "8.692673779389363rem",
  u15r: "7.59375rem",
  u14r: "6.63375165409127rem",
  u13r: "5.795115852926242rem",
  u12r: "5.0625rem",
  u11r: "4.422501102727513rem",
  u10r: "3.8634105686174953rem",
  u9r: "3.375rem",
  u8r: "2.9483340684850083rem",
  u7r: "2.575607045744997rem",
  u6r: "2.25rem",
  u5r: "1.9655560456566725rem",
  u4r: "1.7170713638299977rem",
  u3r: "1.5rem",
  u2r: "1.3103706971044482rem",
  u1r: "1.1447142425533319rem",
  d1r: "0.8735804647362989rem",
  d2r: "0.7631428283688879rem",
  d3r: "0.6666666666666666rem",
  d4r: "0.5823869764908659rem",
  d5r: "0.5087618855792586rem",
  d6r: "0.4444444444444444rem",
  d7r: "0.3882579843272439rem",
  d8r: "0.3391745903861724rem",
  d9r: "0.2962962962962963rem",
  d10r: "0.2588386562181626rem",
  d11r: "0.22611639359078162rem",
  d12r: "0.19753086419753085rem",
  d13r: "0.17255910414544176rem",
  d14r: "0.15074426239385438rem",
  d15r: "0.13168724279835392rem",
  d16r: "0.11503940276362785rem",
  d17r: "0.10049617492923625rem",
  d18r: "0.0877914951989026rem",
};

export class Scale {
  factor: number;
  delta: number;

  constructor({ factor, delta }: { factor: number; delta: number }) {
    if (!factor || !delta)
      throw new Error(
        "missing constructor parameters. e.g.: `new Scale({ factor: 2.25, delta: 6 })`"
      );
    if (factor === 0) throw new Error("factor can’t be 0");
    if (delta === 0) throw new Error("delta can’t be 0");
    this.factor = factor;
    this.delta = delta;
  }

  /** Return change in scale, in ems */
  public scale(n: number, options?: { root?: boolean }) {
    if (typeof n !== "number")
      throw new Error(`Scale.scale(number) must be a number`);
    const unit = options && options.root ? "rem" : "em";
    const val = this.factor ^ (n / this.delta);
    return `${val}${unit}`;
  }
}
