<template>
  <div style="width: 100vw; height: 100vh">
    <fm-making-form
      ref="makingForm"
      upload
      preview
      generate-code
      generate-json
      clearable
      :advanceFields="advanceFields"
    >
      <template slot="action"> </template>
      <!-- <template v-slot:widgetconfig="{ type, data, customProps }">
        {{ data.el }}
        <el-form-item v-if="data.el === 'table'" label="Tip">
          <el-input v-model="customProps.tip"></el-input>
        </el-form-item>
      </template> -->
    </fm-making-form>
    <fm-generate-form :data="jsonData" ref="generateForm"> </fm-generate-form>
    <el-button type="primary" @click="handleSubmit">Submit</el-button>
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
                    type: "table",
                    icon: "",
                    options: {
                      defaultValue: [],
                      width: "",
                      placeholder: "",
                      disabled: false,
                      clearable: false,
                      remote: true,
                      remoteOptions: [],
                      props: {
                        value: "value",
                        label: "label",
                        children: "children",
                      },
                      remoteFunc: "func_1694351517000_42120",
                    },
                    name: "子表单",
                    key: "1694351517000_42120",
                    model: "table_1694351517000_42120",
                    rules: [],
                  },
                ],
              },
              { span: 12, list: [] },
            ],
            options: {
              gutter: 0,
              justify: "start",
              align: "top",
              remoteFunc: "func_1694351502000_9115",
            },
            name: "栅格布局",
            key: "1694351502000_9115",
            model: "grid_1694351502000_9115",
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
