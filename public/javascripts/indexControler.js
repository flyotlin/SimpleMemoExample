let memoTitle = document.querySelector("#memo-title");
let memoContent = document.querySelector("#memo-content");
let memoUsername = document.querySelector("#memo-username");
let newMemoBtn = document.querySelector("#newMemoBtn");

newMemoBtn.addEventListener("click", async () => {
    const memoData = {
        title: memoTitle.value,
        content: memoContent.value
    };

    const postUrl = 'https://ncufresh-cloudrun-p2qvm7cmaq-uc.a.run.app/users/' + memoUsername.value;

    console.log(memoTitle.value, memoContent.value, memoUsername.value);

    console.log(memoData);
    let response = await fetch(postUrl, {
        method: "POST",
        body: JSON.stringify(memoData),
        headers: new Headers(
            { "Content-Type": "application/json" }
        )
    });

    console.log(await response.json().status);
});