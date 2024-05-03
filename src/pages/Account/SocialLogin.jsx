import React from 'react';
import "./SocialLogin.css";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className="socialLogin-container">
            <div className='flex items-center justify-center gap-3'>
                <hr />
                <p style={{color: 'lightgray'}}>OR</p>
                <hr />
            </div>

            <div className="btn-box flex flex-col">
                <button className='kakao-login relative'>
                    <span className="absolute kakao-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 1792 1664"><path fill="#3B1D1E" d="M896 12q243 0 449.5 94.5t326.5 257T1792 718t-120 355t-326 257.5t-450 94.5q-77 0-159-11q-356 247-379 250q-11 4-21-1q-4-3-6-8t-2-9v-4q6-39 91-325q-193-96-306.5-254.5T0 718q0-192 120-354.5t326.5-257T896 12"/></svg></span>
                    <p>카카오 로그인</p>
                </button>
                <button className='naver-login relative'>
                    <span className='absolute naver-icon'><SiNaver className='naver-i' /></span>
                    <p>네이버 로그인</p>
                </button>
                <button className='google-login relative'>
                    <span className="absolute google-icon"><FcGoogle size={20} /></span>
                    <p>구글 로그인</p>
                </button>
            </div>
        </div>
    )
}

export default SocialLogin