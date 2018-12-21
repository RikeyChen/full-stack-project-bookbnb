json.extract! user, :id, :email, :first_name, :last_name

if user.image.attached?
  json.photo_url url_for(user.image)
end