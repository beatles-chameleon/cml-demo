<view class="cml-radio  cml-base cml-view" style="{{computedCstyle}}">
  <view class="cml-radio-wrap  cml-base cml-view" bindtap="_cmlEventProxy" data-eventtap="{{['changeSelect']}}">
    <view class="cml-radio-select  cml-base cml-view" style="{{radioStyle}}">
      <view class="{{ radioClass }}  cml-base cml-view" style="{{radioInnerStyle}}">
      </view>
    </view>
    <text class="cml-radio-label  cml-base cml-text">{{label}}</text>
  </view>
</view>