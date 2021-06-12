<template>
    <nav class="navbar" :class="navbarBackground">
        <div class="logo-wrap">
            <h3>Sal<span>Food</span></h3>
        </div>
        <div class="nav-links-wrapper">
            <ul class="nav-links" ref="nav-links">
                <li class="nav-link active">
                    <a href="#app" @click="setToActive">Home</a>
                </li>
                <li class="nav-link">
                    <a href="#menu" @click="setToActive">Menu</a>
                </li>
                <li class="nav-link">
                    <a href="#service" @click="setToActive">Service</a>
                </li>
                <li class="nav-link">
                    <a href="#contact" @click="setToActive">Contact</a>
                </li>
            </ul>
            <div class="button-auth">
                <a href="">Sign Up</a>
            </div>
            <div class="hamburger" ref="hamburger" @click="toggleSidebar">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            changeNavBackground: false,
            sidebarIsOpen: false,
        }
    },
    computed: {
        navbarBackground: function() {
            return {
                'background-changed': this.changeNavBackground,
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.navbarHandleScroll)
    },
    methods: {
        navbarHandleScroll: function() {
            this.changeNavBackground =  ( window.scrollY >= 70 ) ? true : false;
        },
        toggleSidebar: function() {
            this.sidebarIsOpen = !this.sidebarIsOpen;

            if( this.sidebarIsOpen ) {
                this.$refs['nav-links'].classList.contains('sidebar-closed') ? this.$refs['nav-links'].classList.remove('sidebar-closed') : ''; 
                this.$refs['nav-links'].classList.add('sidebar-open');
                this.$refs['hamburger'].classList.add('position-to-cross');
                this.sidebarIsOpen = !this.sidebarIsOpen;
            } else {
                this.$refs['nav-links'].classList.contains('sidebar-open') ? this.$refs['nav-links'].classList.remove('sidebar-open') : ''; 
                this.$refs['nav-links'].classList.add('sidebar-closed');
                this.$refs['hamburger'].classList.remove('position-to-cross');
                this.sidebarIsOpen = !this.sidebarIsOpen;
            }
        },
        setToActive: function() {
            this.$refs['nav-links'].querySelectorAll('.nav-link').forEach(e => {
                e.classList.contains('active') ? e.classList.remove('active') : '';
            });
            event.target.parentElement.classList.add('active');
            this.$refs['nav-links'].classList.contains('sidebar-open') ? this.$refs['nav-links'].classList.remove('sidebar-closed') : ''; 
            this.$refs['nav-links'].classList.add('sidebar-closed');
            this.$refs['hamburger'].classList.remove('position-to-cross');
        }
    },
}
</script>

<style lang="scss">
    @import './Navbar';
</style>
