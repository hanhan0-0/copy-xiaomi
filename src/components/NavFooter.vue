<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://github.com/hanhan0-0" target="_blank">hanhan的github主页</a><span>|</span>
            <a href="https://user.qzone.qq.com/2970483741?ADUIN=2970483741&ADSESSION=1645163179&ADTAG=CLIENT.QQ.5845_MyTip.0&ADPUBNO=27178&source=namecardhoverstar" target="_blank">hanhan的qq空间</a><span>|</span>
            <a href="https://blog.csdn.net/qq_45869683?spm=1000.2115.3001.5343" target="_blank">hanhan的csdn</a><span>|</span>
            <a href="">hanhan的知乎</a>
        </div>
        <div class="copyright">hanhan于<span class="domain">2022.2.18日</span>实现此模块</div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss" scoped>
    .footer{
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color:#999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright{
            .domain{
                color: #FF6600;
            }
        }
    }
</style>