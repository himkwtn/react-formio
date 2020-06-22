export const options = {
  builder: {
    basic: false,
    advanced: false,
    data: false,
    premium: false,
    layout: false,
    custom: {
      title: "Components",
      default: true,
      weight: 0,
      components: {
        textfield: true,
        textarea: true,
        email: true,
        phoneNumber: true,
        select: true,
        customSelect: {
          title: "Custom Select",
          key: "customSelect",
          icon: "terminal",
          schema: {
            label: "Custom Select",
            type: "select",
            key: "customSelect",
            dataSrc: "url",
            placeholder: "select one",
            data: {
              url:
                "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json",
            },
            valueProperty: "Model_Name",
            template: "<span>{{ item.Model_Name }}</span>",
            selectValues: "Results",
            validate: {
              required: true,
            },
          },
        },
      },
    },
  },
  editForm: {
    textfield: [
      {
        key: "api",
        ignore: true,
      },
    ],
    // customSelect: {
    //   components: [
    //     {
    //       weight: 0,
    //       type: "textfield",
    //       input: true,
    //       key: "label",
    //       label: "Label",
    //       placeholder: "Field Label",
    //       tooltip: "The label for this field that will appear next to it.",
    //       validate: {
    //         required: true,
    //       },
    //     },
    //   ],
    // },
  },
};
