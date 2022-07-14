class ItemSerializer < ActiveModel::Serializer
  attributes :id, :carbs, :name, :vegan, :category, :description, :img_url
end
