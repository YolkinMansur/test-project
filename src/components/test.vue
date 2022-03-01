<template>
    <div>
        <h1 v-if="status === 1">{{ transfer }}</h1>
        <p v-else> {{ heading}}</p>
        <button @click="changeStatus()">Click me!</button>
    <div class="flex" v-for="item of arr" :key="item.id">
        <p>{{item.id}}.</p>
        <h1> {{item.surname}} {{item.name}}</h1>
    </div>
    <img :src=heading alt="">
    </div>
</template>

<script>
export default {
    name: "Test",
    data(){
        return{
            heading: 'Hello Vue!',
            status: 1,
            arr:[
                {
                    id: 1,
                    name: 'Mansur',
                    surname: 'Yolkin'
                },
                {
                    id: 2,
                    name: 'Batyrkhan',
                    surname: 'Baurzhanuly'
                }
            ]
        }
    },
    props:['transfer'],
    methods: {
        changeStatus(){
            if (this.status === 1){
                this.status = 0
            }else{
                this.status = 1
            }
        }
    },
}
</script>