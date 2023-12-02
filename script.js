function convert() {
    const nameInput = document.getElementById("nameInput").value.toUpperCase();
    let result = "";

    for (let i = 0; i < nameInput.length; i++) {
        const char = nameInput.charAt(i);
        if (char >= "A" && char <= "Z") {
            const charCode = char.charCodeAt(0) - 64;
            result += `${char} = ${charCode}, `;
        }
    }

    // Remove the trailing comma and space
    result = result.slice(0, -2);

    document.getElementById("result").innerText = result;
}
