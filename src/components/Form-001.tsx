import React from "react";

export const Form001 = React.memo((
    { submitForm, total }: { submitForm: () => void; total: number }) => {
    console.log("🔹 Form render lại");

    return (
        <>
            <p>Form 001 - {total}</p>
            <input type="text" placeholder="Nhập gì đó..." id="name" />
            <label htmlFor="name">Tên của bạn</label>
            <button type="submit" onClick={submitForm}>Gửi</button>
        </>
    )
});