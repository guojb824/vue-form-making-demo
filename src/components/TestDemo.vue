<template>
  <div style="width: 100vw; height: 100vh">
    <fm-making-form
      ref="makingForm"
      upload
      preview
      generate-code
      generate-json
      clearable
      :custom-fields="customFields"
      :advanceFields="advanceFields"
      :advanceComponents="advanceComponents"
    >
      <template slot="action"> </template>
      <template v-slot:widgetconfig="{ type, data, customProps }">
        {{ data.el }}
        <el-form-item v-if="data.el === 'table'" label="Tip">
          <el-input v-model="customProps.tip"></el-input>
        </el-form-item>
      </template>
    </fm-making-form>
    <!-- <fm-generate-form :data="jsonData" ref="generateForm"> </fm-generate-form>
    <el-button type="primary" @click="handleSubmit">Submit</el-button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      jsonData: {
        list: [
          {
            type: "grid",
            icon: "icon-grid-",
            columns: [
              {
                span: 12,
                list: [
                  {
                    type: "input",
                    icon: "icon-input",
                    options: {
                      width: "100%",
                      defaultValue: "",
                      required: false,
                      dataType: "string",
                      pattern: "",
                      placeholder: "",
                      disabled: false,
                      remoteFunc: "func_1694276755000_47558",
                    },
                    name: "单行文本",
                    key: "1694276755000_47558",
                    model: "input_1694276755000_47558",
                    rules: [{ type: "string", message: "单行文本格式不正确" }],
                  },
                ],
              },
              {
                span: 12,
                list: [
                  {
                    type: "number",
                    icon: "icon-number",
                    options: {
                      width: "",
                      required: false,
                      defaultValue: 0,
                      min: 0,
                      max: 0,
                      step: 1,
                      disabled: false,
                      controlsPosition: "",
                      remoteFunc: "func_1694276757000_27210",
                    },
                    name: "计数器",
                    key: "1694276757000_27210",
                    model: "number_1694276757000_27210",
                    rules: [],
                  },
                ],
              },
            ],
            options: {
              gutter: 0,
              justify: "start",
              align: "top",
              remoteFunc: "func_1694276747000_41631",
            },
            name: "栅格布局",
            key: "1694276747000_41631",
            model: "grid_1694276747000_41631",
            rules: [],
          },
          {
            type: "grid",
            icon: "icon-grid-",
            columns: [
              {
                span: 12,
                list: [
                  {
                    type: "radio",
                    icon: "icon-radio-active",
                    options: {
                      inline: false,
                      defaultValue: "",
                      showLabel: false,
                      options: [
                        { value: "Option 1", label: "Option 1" },
                        { value: "Option 2", label: "Option 2" },
                        { value: "Option 3", label: "Option 3" },
                      ],
                      required: false,
                      width: "",
                      remote: false,
                      remoteOptions: [],
                      props: { value: "value", label: "label" },
                      remoteFunc: "func_1694276759000_14580",
                      disabled: false,
                    },
                    name: "单选框组",
                    key: "1694276759000_14580",
                    model: "radio_1694276759000_14580",
                    rules: [],
                  },
                ],
              },
              {
                span: 12,
                list: [
                  {
                    type: "checkbox",
                    icon: "icon-check-box",
                    options: {
                      inline: false,
                      defaultValue: [],
                      showLabel: false,
                      options: [
                        { value: "Option 1" },
                        { value: "Option 2" },
                        { value: "Option 3" },
                      ],
                      required: false,
                      width: "",
                      remote: false,
                      remoteOptions: [],
                      props: { value: "value", label: "label" },
                      remoteFunc: "func_1694276761000_94030",
                      disabled: false,
                    },
                    name: "多选框组",
                    key: "1694276761000_94030",
                    model: "checkbox_1694276761000_94030",
                    rules: [],
                  },
                ],
              },
            ],
            options: {
              gutter: 0,
              justify: "start",
              align: "top",
              remoteFunc: "func_1694276752000_22910",
            },
            name: "栅格布局",
            key: "1694276752000_22910",
            model: "grid_1694276752000_22910",
            rules: [],
          },
        ],
        config: { labelWidth: 100, labelPosition: "right", size: "small" },
      },
      customFields: [
        {
          name: "自定义组件", // 字段名称
          el: "custom-width-height", // 组件注册的名称
          options: {
            /* 下面是设计器中自带的字段属性，可以根据自己组件的属性来进行配置 */
            defaultValue: {}, // 默认值
            customClass: "", // 自定义样式
            labelWidth: 100, // 标签宽度
            isLabelWidth: false, // 是否展示标签
            hidden: false, // 隐藏属性
            dataBind: true, // 数据绑定属性
            required: false, // 必填校验
            dataType: "", // 数据类型校验
            pattern: "", // 正则表达式校验
            validator: "", // 自定义校验
          },
        },
      ],
      advanceFields: ["blank", "imgupload", "editor", "cascader", "table"],
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.generateForm
        .getData()
        .then((data) => {
          alert(JSON.stringify(data));
        })
        .catch(() => {});
    },
  },
};
</script>
