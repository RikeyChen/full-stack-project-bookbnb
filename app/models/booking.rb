# == Schema Information
#
# Table name: bookings
#
#  id            :bigint(8)        not null, primary key
#  guest_id      :integer          not null
#  listing_id    :integer          not null
#  checkin_date  :date             not null
#  checkout_date :date             not null
#  num_guests    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Booking < ApplicationRecord
  validates: :checkin_date, :checkout_date, :num_guests, presence: true

  belongs_to :guest,
    foreign_key: :guest_id,
    class_name: :User

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing
end
