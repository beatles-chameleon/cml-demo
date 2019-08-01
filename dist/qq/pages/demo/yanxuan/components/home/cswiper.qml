<view class="carousel  cml-base cml-view" bindtouchmove="_cmlEventProxy" data-eventtouchmove="{{['forbinding']}}">
  <swiper class="carousel-container  cml-base cml-carousel" indicator-dots="{{true}}" current="{{1}}" circular="{{true}}" autoplay="{{true}}">
    <swiper-item class="carousel-carousel-item  cml-base cml-carousel-item" qq:for="{{bannerImgList}}" qq:for-index="i" qq:for-item="item" data-idx="{{i}}" qq:key="{{i}}">
      <image src="{{item.imgUrl}}" class="Img  cml-base cml-image" />
    </swiper-item>

  </swiper>
</view>