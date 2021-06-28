<template>
  <div class="login">
    <div class="login-bk">
      <div class="login-bk-shadow"></div>
    </div>

    <div class="login-container">
      <el-form
        ref="userLoginForm"
        :model="formModel"
        :rules="formRules"
        class="login-form"
        label-position="left"
      >
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            prefix-icon="el-icon-user"
            placeholder="用户名"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            show-password
            prefix-icon="el-icon-lock"
            placeholder="密码"
          >
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            class="login-btn"
            @click.prevent="handleLogin"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRef,
  toRefs,
  watch,
  defineComponent,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";

const initFormFields = () => {
  return {
    username: "",
    password: "",
  };
};
export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();
    const route = useRoute();

    const userLoginForm = ref(null);

    const state = reactive({
      redirect: "",
      formModel: initFormFields(),
      formRules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
      },
      loading: false,
    });

    mounted(() => {});

    unmounted(() => {});

    // watch(()=>route,()=>{
    //     const query = route.query;
    //     if (query) {
    //       state.redirect = query.redirect;
    //     }
    // })

    const resetFormFields = () => {
      state.formModel = initFormFields();
      userLoginForm.value.resetFields();
    };

    const handleLogin = () => {
      const { username, password } = state.formModel;
      const params = {
        username,
        password,
      };

      userLoginForm.value.validate((valid) => {
        if (valid) {
          state.loading = true;
          store
            .dispatch("user/login", params)
            .then((res) => {
              if (+res.code === 0) {
                ElMessage.success("登录成功");
                router.push({ path: state.redirect || "/" });
              } else {
                ElMessage.error(res.message || "登录错误");
              }
              state.loading = false;
            })
            .catch(() => {
              state.loading = false;
            });
        } else {
          console.log("invalid form");
          return false;
        }
      });
    };

    return {
      ...toRefs(state),
      userLoginForm,
      resetFormFields,
      handleLogin,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
