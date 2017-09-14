import React, { Component } from 'react'
import HeaderLogin from "../../common/header-login/index";

export default class Login extends Component {
    render(){
        return (
            <div>
                <HeaderLogin/>
                <h3>登陆</h3>
                <div>
                    <input type="text" placeholder="请输入用户名/邮箱/手机号"/>
                    <br/>
                    <input type="text" placeholder="请输入密码"/>
                    <div>
                        <div>
                            <input type="checkbox"/><span>记住我</span>
                        </div>
                        <span>忘记密码</span>
                    </div>
                    <button>登陆</button>
                    <span>没有账户，立即注册</span>
                </div>
            </div>
        )
    }
}