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
  validates :checkin_date, :checkout_date, :num_guests, presence: true
  validate :start_must_come_before_end

  belongs_to :guest,
    foreign_key: :guest_id,
    class_name: :User

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

  def start_must_come_before_end
    return if (checkin_date < checkout_date)
    errors[:checkin_date] << 'must come before end date'
    errors[:checkout_date] << 'must come after start date'
  end

  def unavailable_date(date)
    return true if date < Date.today
    range = (checkin_date .. checkout_date)
    return true if range === date
  end

  def unavailable_dates
    unav_dates = []
    (checkin_date .. checkout_date).each { |date| unav_dates << date }
    unav_dates
  end
end
