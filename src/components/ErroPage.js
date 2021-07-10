import React from 'react'
import erroimg from '../images/erroimg.png'

export const ErroPage = () => {
    return (
        <div className=" h-screen bg-skin-fill" >
            <div className="flex flex-col justify-center items-center ">
                <img src={erroimg} alt="img" className="  p-2" />
                <div className="flex flex-col justify-center items-center p-0">
                    <h1 className="text-5xl font-bold">404</h1>
                    <h2 className="font-bold p-3 text-2xl">Không tìm thấy trang</h2>
                    <p className="font-medium p-3">Có gì đó đã xảy ra, không tìm thấy trang yêu cầu</p>
                    <button className="m-2 bg-black text-white  rounded-2xl w-40 p-2  ">Về trang chủ</button>
                </div>
            </div>
        </div>
    )
}

export default ErroPage
