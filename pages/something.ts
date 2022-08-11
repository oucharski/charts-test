type NestedExampleType = {
  property1: string;
  property2: string;
  property3: number | boolean;
};

type ExampleType = {
  property1: string;
  property2: string;
  property3: number | boolean;
  property4: NestedExampleType;
  property5?: number;
};

export const dictionary: ExampleType = {
  property1: "value",
  property2: "value",
  property3: false,
  property4: {
    property1: "value",
    property2: "value",
    property3: false,
  },
};
