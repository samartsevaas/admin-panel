<template>
  <div class="auth">
    <div class="auth-company">
      <div class="auth-company_logo">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <div class="auth-company_slogan">
        <span>Need for drive</span>
      </div>
    </div>
    <div class="auth-data">
      <div class="auth-data_action">Вход</div>
      <div class="auth-data_email">
        <div type="text" class="auth-data_email-label">Почта</div>
        <base-input
          v-model="userEmail"
          @input="updateCurrentUserEmail"
        ></base-input>
      </div>
      <div class="auth-data_password">
        <div class="auth-data_password-label">Пароль</div>
        <base-input
          type="password"
          :class="[onError]"
          v-model="userPassword"
          @input="updateCurrentUserPassword"
        ></base-input>
        <div v-show="isError" class="isError">
          Вы ввели неверный логин/пароль
        </div>
      </div>
      <div class="auth-data_buttons">
        <div class="auth-data_buttons-request">
          <base-button theme="neutral" type="button">
            Запросить доступ
          </base-button>
        </div>
        <div class="auth-data_buttons-enter">
          <base-button
            FontColor="white"
            borderRadius="standard"
            type="button"
            @click.native="sendAuthData"
            >Войти</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@elements/BaseButton/index.vue";
import BaseInput from "@elements/BaseInput/index.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "AuthViews",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      userEmail: "",
      userPassword: "",
      isError: false,
    };
  },
  methods: {
    ...mapMutations({
      setCurrentUserEmail: "auth/setCurrentUserEmail",
      setCurrentUserPassword: "auth/setCurrentUserPassword",
      sendAuth: "auth/sendAuth",
    }),
    ...mapActions({
      sendAuth: "auth/sendAuth",
    }),
    updateCurrentUserEmail() {
      this.setCurrentUserEmail(this.userEmail);
    },
    updateCurrentUserPassword() {
      this.setCurrentUserPassword(this.userPassword);
    },
    createRequestParams() {
      const { userEmail: username, userPassword: password } = this.getAuth;
      return {
        username,
        password,
      };
    },
    async sendAuthData() {
      try {
        const request = this.createRequestParams();
        await this.sendAuth(request);
        this.userEmail = "";
        this.userPassword = "";
        await this.$router.push("admin-panel");
      } catch (e) {
        return (this.isError = true);
      }
      this.userPassword = "";
      this.userEmail = "";
      this.isError = false;
    },
  },
  computed: {
    ...mapGetters({
      getAuth: "getAuth",
    }),
    onError() {
      if (this.isError) {
        return "onError";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  max-width: 376px;
  margin: 0 auto;
  align-self: center;
  width: 100%;
  &-company {
    display: flex;
    justify-content: center;
    margin-bottom: 16.5px;
    &_logo {
      margin-right: 11.5px;
    }
    &_slogan {
      align-self: center;
      & span {
        font-size: 24px;
      }
    }
  }
}
.auth-data {
  box-shadow: 0 1px 0 rgba(90, 97, 105, 0.11), 0 2px 4px rgba(90, 97, 105, 0.12),
    0 5px 5px rgba(90, 97, 105, 0.06), 0 3.5px 35px rgba(90, 97, 105, 0.1);
  border-radius: 9px;
  padding: 11px 19.5px 17px 19px;
  &_action {
    display: flex;
    justify-content: center;
    margin-bottom: 35.5px;
  }
  &_email,
  &_password {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 10.5px;
    margin-bottom: 15px;
    &-label {
      color: $auth-label;
      font-size: 10.5px;
      margin-bottom: 8.5px;
    }
    & input {
      width: 100%;
    }
  }
  &_buttons {
    display: flex;
    justify-content: space-between;
  }
}
.isError {
  font-size: 10.5px;
  color: $error;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
