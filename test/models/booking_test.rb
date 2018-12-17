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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
