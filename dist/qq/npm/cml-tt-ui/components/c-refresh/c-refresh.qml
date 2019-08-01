<view class="refresh  cml-base cml-view" qq:if="{{ display }}">
  <block qq:if="{{ !customUi }}" class=" cml-base cml-block">
    <image class="loading-icon  cml-base cml-image" src="{{ icon }}" />
  </block>
  <block qq:else class=" cml-base cml-block">
    <slot class=" cml-base cml-slot"></slot>
  </block>
</view>