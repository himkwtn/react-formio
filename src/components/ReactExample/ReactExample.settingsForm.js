export default () => {
  return {
    components: [
      {
        weight: 0,
        type: "textfield",
        input: true,
        key: "label",
        label: "Label",
        placeholder: "Field Label",
        tooltip: "The label for this field that will appear next to it.",
      },
      {
        weight: 10,
        type: "checkbox",
        label: "Required",
        tooltip:
          "A required field must be filled in before the form can be submitted.",
        key: "validate.required",
        input: true,
        defaultValue: 0,
      },
      {
        type: "select",
        input: true,
        weight: 0,
        key: "privacy",
        defaultValue: "Everyone",
        label: "Privacy",
        dataSrc: "values",
        data: {
          values: [
            { label: "Everyone", value: "Everyone" },
            { label: "Creator", value: "Creator" },
            { label: "No one", value: "No-one" },
          ],
        },
      },
      {
        type: "select",
        input: true,
        weight: 0,
        key: "aggregation",
        defaultValue: "First",
        label: "Aggregation",
        dataSrc: "values",
        data: {
          values: [
            { label: "First", value: "First" },
            { label: "Last", value: "Last" },
            { label: "Majority", value: "Majority" },
            { label: "Combined", value: "Combined" },
          ],
        },
      },
    ],
  };
};
