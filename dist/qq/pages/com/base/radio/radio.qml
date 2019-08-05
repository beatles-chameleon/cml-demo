<cml-buildin-page title="radio演示" class=" cml-base cml-page">
  <c-header title="radio" class=" cml-view cml-c-header"></c-header>
  <view class="box  cml-base cml-view">
    <cml-buildin-radio checked="{{ radioValue1 }}" label="Option1" bindchange="_cmlEventProxy" data-eventchange="{{['valueChange1']}}" class=" cml-base cml-radio">
    </cml-buildin-radio>
  </view>
  <view class="title  cml-base cml-view">
    <text class=" cml-base cml-text">value: {{radioValue1}}</text>
  </view>
  <view class="box  cml-base cml-view">
    <cml-buildin-radio checked="{{ radioValue2 }}" label="Option3" position="right" bindchange="_cmlEventProxy" data-eventchange="{{['valueChange2']}}" class=" cml-base cml-radio">
    </cml-buildin-radio>
  </view>
  <view class="title  cml-base cml-view">
    <text class=" cml-base cml-text">value: {{radioValue2}}</text>
  </view>
  <view class="box  cml-base cml-view">
     <cml-buildin-radio checked="{{ radioValue3 }}" label="Option2" disabled="{{ true }}" class=" cml-base cml-radio">
    </cml-buildin-radio>
  </view>
  <view class="title  cml-base cml-view">
    <text class=" cml-base cml-text">value: {{radioValue3}}</text>
  </view>
  <view class="box  cml-base cml-view">
    <cml-buildin-radio checked="{{ radioValue4 }}" label="Option3" position="right" disabled="{{ true }}" class=" cml-base cml-radio">
    </cml-buildin-radio>
  </view>
  <view class="title  cml-base cml-view">
    <text class=" cml-base cml-text">value: {{radioValue4}}</text>
  </view>
</cml-buildin-page>