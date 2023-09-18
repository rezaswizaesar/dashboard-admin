import styled from 'styled-components'

const LoginStyle = styled.div`
  background-color: #172b4d;
  display: block;
  position: relative;
  height: 100vh;
  color: #fff;
  .login{
    background: linear-gradient(87deg ,#f5365c ,#f56036);
    padding-bottom: 8rem;
    &-header{
      color: #fff;
      font-weight: 400;
      text-align: right;
      padding: 30px;
      font-size: 1rem;
      display: block;
    }
    &-section{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      &__card{
        position: absolute;
        align-items: center;
        justify-content: center;
        text-align: center;
        left: 0;
        right: 0;
        top: -110px;
        background-color: transparent;
        .ant-card-body{
          padding: 50px;
        }
       &-top{
        color: #8898aa;
        display: block;
        margin-bottom: 20px;
       }
      }
    }
    &-version{
      color: #ced4da;
      font-weight: 300;
    }
    &-footer{
      padding-top: 18rem;
      padding-bottom: 2rem;
      position: relative;
      &__copyright{
        color: #8898aa;
        b{
          color: #fff;
        }
      }
    }
  }
  .btn-submit{
    color: #fff;
  }
`
export default LoginStyle