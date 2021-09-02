<template>
    <section id="bank" class="achide" :class="{hide: hide}">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Bank Accounts</h2>
                    <hr class="star-primary">
                </div>
                <div class="col-lg-12 text-center">
                    <ul>
                        <li>
                            <h4>BCP</h4>
                            <div>
                                <p>Soles</p>
                                <code>19121738752033</code><br/>
                                <code>00219112173875203350</code>
                                <p>Dolares</p>
                                <code>19104672528124</code><br/>
                                <code>00219110467252812452</code>
                            </div>
                        </li>
                        <li>
                            <h4>Interbank</h4>
                            <p>Soles</p>
                            <code>6393098282175</code>
                        </li>
                        <li>
                            <h4>BanBif</h4>
                            <p>Soles</p>
                            <code>008016038034</code><br/>
                            <code>03820510801603803412</code>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'SectionBank',
    data() {
        return {
            hide: true
        }

    },
	mounted() {
    const idSection = 'bank';
    const { name, hash } = this.$route;

    // read route
    if (name === idSection || hash.substring(1) === idSection) {
      this.hide = false;
    }
	}
}
</script>
<style scoped>
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
    }
    ul li {
        width: 400px;
        min-height: 350px;
        float: left;
        margin: 0 0.4em;
        border: 1px solid #eee;
        padding: 5px;
        list-style: none;
    }
    ul li h4 {
        font-size: 1.9em;
        border-bottom: 1px solid #eee;
        line-height: 1.5em;
    }
</style>
