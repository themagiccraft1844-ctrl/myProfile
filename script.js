$(document).ready(function() {
    function createBubble() {
        const bubble = $('<div class="bubble"></div>');
        const size = Math.random() * 100 + 50;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        
        bubble.css({
            width: size + 'px',
            height: size + 'px',
            left: left + '%',
            animationDuration: duration + 's'
        });
        
        $('#liquidBg').append(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    setInterval(createBubble, 1000);

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 100);
        }
    });

    $(window).on('scroll', function() {
        $('.skill-progress').each(function() {
            const skillBar = $(this);
            const skillPercent = skillBar.data('percent');
            const skillTop = skillBar.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if(windowBottom > skillTop && skillBar.width() === 0) {
                skillBar.css('width', skillPercent + '%');
            }
        });
    });

    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah terkirim.');
        this.reset();
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('.navbar').css('background', 'rgba(102, 126, 234, 0.95)');
        } else {
            $('.navbar').css('background', 'rgba(255, 255, 255, 0.1)');
        }
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const recipientEmail = 'ipbgavingalih@apps.ipb.ac.id'; 

    let emailBody = 
        'Nama Pengirim: ' + name + '%0D%0A' +
        'Alamat Email: ' + email + '%0D%0A%0D%0A' +
        'Isi Pesan:%0D%0A' + message;
    const mailtoLink = 
        'mailto:' + recipientEmail + 
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + emailBody;
    window.location.href = mailtoLink;
});