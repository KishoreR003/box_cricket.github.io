async function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const response = await fetch('https://api.github.com/repos/<KishoreR003>/<box_cricket.github.io>/issues', {
        method: 'POST',
        headers: {
            'Authorization': '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',
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: `New Registration: ${data.teamname}`,
            body: JSON.stringify(data)
        })
    });

    if (response.ok) {
        alert('Registration successful!');
        form.reset();
    } else {
        alert('Registration failed. Please try again.');
    }
}
