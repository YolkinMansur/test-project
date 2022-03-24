<template>
<div>
        <div class="headerMain">
        <div class="container mx-auto">
            <div class="images">
                <img src="https://www.metacritic.com/images/icons/metacritic-icon.svg" alt="">
                <img src="https://www.metacritic.com/images/icons/metacritic-wordmark.svg" alt="">
            </div>
            <div class="filter">
                <input type="text" placeholder="search...">
                <div class="resultFilter">

                </div>
            </div>
            <div class="links">
                <router-link to="/">Games</router-link>
                <router-link to="/">Movies</router-link>
                <router-link to="/">TV</router-link>
                <router-link to="/">Music</router-link>
                <p class="text-white" @click="sendUserState[0].online = true" v-if="users[0].online == false" >Sign In <p>
                <p  v-if="sendUserState[0].online == true" class="text-white">{{users[0].name}} {{users[0].surname}}</p>
                
            </div>
        </div>
    </div>
    <form v-if="sendUserState[0].online === false" action="">
        <input type="text" v-model="form.name" />
        <input type="text" v-model="form.password" />
        <p @click="compareData"></p>

    </form>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {
            form:{
                name: '',
                password: ''
            }
        }
    },
        async mounted(){
           this.fetchUsers
        },
        methods:{
            ...mapActions(['fetchUsers']),
            compareData() {
                if (this.form.name == this.stendUserState[0].name
                && this.form.password == this.stendUserState[0].password) {
                    this.sendUserState[0].online = true;
                    console.log('login succsesfull');
                }
    else {
        console.log('login failed');
    }
            }
        },
        computed:mapGetters(['sendUserState'])
    };
     

</script>