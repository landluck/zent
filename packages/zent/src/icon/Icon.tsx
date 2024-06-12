import cx from 'classnames';
import { forwardRef } from 'react';

/* auto-generate: start */
export type IconType =
  | 'add-page'
  | 'admissions'
  | 'admissions-o'
  | 'approval'
  | 'approval-o'
  | 'arrow-down'
  | 'arrow-up'
  | 'assess'
  | 'assess-o'
  | 'back'
  | 'bell'
  | 'bell-o'
  | 'bookmark'
  | 'bookmark-o'
  | 'brush'
  | 'brush-o'
  | 'business'
  | 'business-manage'
  | 'business-manage-o'
  | 'business-o'
  | 'calendar'
  | 'calendar-o'
  | 'canvas'
  | 'canvas-o'
  | 'capital'
  | 'capital-o'
  | 'care'
  | 'care-o'
  | 'caret-down'
  | 'caret-up'
  | 'casher'
  | 'cashier'
  | 'cashier-desk-o'
  | 'cashier-o'
  | 'channel-o'
  | 'chart'
  | 'chart-o'
  | 'check'
  | 'check-circle'
  | 'check-circle-o'
  | 'checkin'
  | 'checkin-o'
  | 'clock'
  | 'clock-o'
  | 'close'
  | 'close-circle'
  | 'close-circle-o'
  | 'closed-eye'
  | 'contract-o'
  | 'countdown'
  | 'coupon'
  | 'coupon-o'
  | 'course'
  | 'course-o'
  | 'customer'
  | 'customer-manage'
  | 'customer-manage-o'
  | 'customer-o'
  | 'customer-service'
  | 'customer-service-o'
  | 'development-doc'
  | 'development-doc-o'
  | 'distribution-o'
  | 'doc'
  | 'double-last'
  | 'double-next'
  | 'down'
  | 'down-circle'
  | 'down-circle-o'
  | 'download'
  | 'drag'
  | 'edit'
  | 'edit-o'
  | 'educational'
  | 'educational-o'
  | 'error-circle'
  | 'error-circle-o'
  | 'expand-customer'
  | 'expand-customer-o'
  | 'export'
  | 'eye'
  | 'eye-o'
  | 'feedback'
  | 'filter-o'
  | 'finance'
  | 'finance-o'
  | 'flow-o'
  | 'folder-o'
  | 'forbidden-circle'
  | 'fullscreen-exit'
  | 'gift'
  | 'goods'
  | 'goods-o'
  | 'hc-manage'
  | 'hc-manage-o'
  | 'help-circle'
  | 'help-circle-o'
  | 'hotel'
  | 'hotel-o'
  | 'hotline-o'
  | 'hr'
  | 'hr-o'
  | 'im-o'
  | 'info-circle'
  | 'info-circle-o'
  | 'inventory'
  | 'inventory-o'
  | 'jump-out'
  | 'knowledge-o'
  | 'left'
  | 'left-circle'
  | 'left-circle-o'
  | 'link'
  | 'loading'
  | 'lock'
  | 'locked'
  | 'locked-o'
  | 'marketing'
  | 'marketing-o'
  | 'member-o'
  | 'message'
  | 'message-o'
  | 'mini-apps'
  | 'mini-apps-o'
  | 'more'
  | 'nameplate'
  | 'nameplate-o'
  | 'nav-grid'
  | 'nav-line'
  | 'open-folder-o'
  | 'order'
  | 'order-o'
  | 'pending-circle'
  | 'pending-payment-o'
  | 'photo'
  | 'pin'
  | 'pin-o'
  | 'plus'
  | 'plus-circle'
  | 'plus-circle-o'
  | 'present'
  | 'present-o'
  | 'procurement'
  | 'procurement-o'
  | 'purchase'
  | 'purchase-o'
  | 'qa-o'
  | 'qrcode'
  | 'refresh'
  | 'remove'
  | 'remove-o'
  | 'report'
  | 'report-forms'
  | 'report-forms-o'
  | 'report-o'
  | 'reset'
  | 'right'
  | 'right-circle'
  | 'right-circle-o'
  | 'rights-list-o'
  | 'salesman-o'
  | 'save'
  | 'save-o'
  | 'scan-code-o'
  | 'scrm-smile'
  | 'scrm-smile-o'
  | 'search'
  | 'settings'
  | 'settings-o'
  | 'share'
  | 'shop'
  | 'shop-analyze-o'
  | 'shop-decorate'
  | 'shop-o'
  | 'shop-template'
  | 'sign-out'
  | 'smile'
  | 'star'
  | 'star-o'
  | 'strategy-o'
  | 'subtract-circle'
  | 'subtract-circle-o'
  | 'suggestions'
  | 'summary'
  | 'summary-o'
  | 'table-compact'
  | 'table-loose'
  | 'target'
  | 'target-o'
  | 'tendency-o'
  | 'text-guide-o'
  | 'thumbnail'
  | 'ticket'
  | 'ticket-o'
  | 'tools-o'
  | 'unlock'
  | 'unlocked'
  | 'unlocked-o'
  | 'up'
  | 'up-circle'
  | 'up-circle-o'
  | 'upload'
  | 'video'
  | 'video-guide-o'
  | 'video-o'
  | 'visit-o'
  | 'voice'
  | 'wait'
  | 'warning'
  | 'warning-o'
  | 'wechat'
  | 'wechat-o'
  | 'withdraw-cash-o'
  | 'youzan'
  | 'youzan-o';
/* auto-generate: end */

export interface IIconProps extends React.HTMLAttributes<HTMLElement> {
  type: IconType;
  spin?: boolean;
}

const Icon = forwardRef<HTMLElement, IIconProps>(
  ({ className, spin, type, ...otherProps }, ref) => (
    <i
      ref={ref}
      className={cx('zenticon', `zenticon-${type}`, className, {
        'zenticon-spin': spin,
      })}
      {...otherProps}
    />
  )
);

Icon.displayName = 'ZentIcon';

export { Icon };

export default Icon;
