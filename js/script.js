$(document).ready(function() {
    $('.back-button').on('click', function() {
        let url_referrer = document.referrer;
        if (typeof(landing_url) !== 'undefined') {
            url_referrer = landing_url;
        }

        if (typeof(url_referrer) !== 'undefined' && String(url_referrer).trim() !== '') {
            window.open(url_referrer, '_blank');
        } else {
            window.open('https://www.layoners.com', '_blank');
        }

        return false;
    });
});