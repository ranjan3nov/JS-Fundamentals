(async () => {
    const rawResponse = await fetch('http://127.0.0.1:8000/apiv2/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-Token": "{{ csrf_token() }}"
        },
        body: JSON.stringify({
            email: 'admin@mail.com',
            password: 'admin1234'
        })
    });
    const content = await rawResponse.json();

    console.log(content);
})();