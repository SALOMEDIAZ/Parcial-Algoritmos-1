
    function getData() {
        return fetch('./')
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    
}
