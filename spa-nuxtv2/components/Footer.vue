
<template>
    <footer id="footer" class="">
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <h2>Contact</h2>
                        <p>Feel it free to write me for any questions about this content or anything you have in your mind<br/>
                        If You need any Support/Help with your project or job Just send me a message I'm in the other site of Internet ":> <span><i class="fas fa-heart"></i></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-contact wow fadeIn">
            <div class="container">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-6">
                        <address>
                            <a id="input-text" href="mailto:contact@anibalcopitan.com">contact@anibalcopitan.com</a>
                        </address>
                        <button id="button-click" class="btn btn-primary" @click="copyText()">Copy Email</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',

    methods: {
        copyText() {
            function copyToClipboard(text) {
                const dummy = document.createElement("input");
                document.body.appendChild(dummy);
                dummy.setAttribute('value', text);
                dummy.select();
                document.execCommand('copy');
                document.body.removeChild(dummy);
            }

            /* Get the text field */
            const copyText = document.getElementById("input-text").innerText;
            copyToClipboard(copyText);

            // effect text
            const elButton = document.getElementById('button-click');
            const primaryValue = elButton.innerText;
            elButton.innerText = 'Copied!'
            elButton.setAttribute('disabled', 'disabled');
            setTimeout(function(){
                elButton.removeAttribute('disabled');
                elButton.innerText = primaryValue;
            }, 700);

        }
    }
}
</script>
<style scoped>
    footer address {
        display: inline-block;
        margin-right: 1em;
    }
    button.btn {
        padding: 0.3em 1em;
        border: 1px solid white;
        font-size: 0.7em;
    }
    button.btn:active {
        background-color: black;
        color: white;
        border: 1px solid white;
    }
    button.btn[disabled] {
        border: 1px solid gray;
    }
</style>
