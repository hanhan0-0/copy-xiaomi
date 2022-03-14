<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <swiper v-bind:options="swiperOption">
                    <swiper-slide v-for="(item,index) in sliderList" v-bind:key="index">
                        <a v-bind:href="'/product/'+item.id"><img src="item.img" alt=""></a>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-bo"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
    name:'index',
    components:{
        Swiper,
        SwiperSlide,
        ServiceBar
    },
    data(){
        return{
            swiperOption:{
                autopaly:true,
                toop:true,
                effect:'cube',
                cubeEffect:{
                    slideShadows:true,
                    shadow:true,
                    shadowOffset:100,
                    shadowScale:0.6
                },
                
             },
            sliderList:[
            {
                id:'42',
                img:'/imgs/slider/slide-1.jpg'
            },
            {
                id:'45',
                img:'/imgs/slider/slide-2.jpg'
            },
            {
                id:'46',
                img:'/imgs/slider/slide-3.jpg'
            },
            {
                id:'',
                img:'/imgs/slider/slide-4.jpg'
            },
            {
                id:'',
                img:'/imgs/slider/slide-5.jpg'
            }
            ]

        } 
    }
}
</script>
 <style lang="scss">
     .index{
         .swiper-box{
             .swiper-container
             {
                 height: 451px;
                 img{
                     width: 100%;
                 }
             }
         }
     }
 
 </style>
