class CreateBookLendings < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.timestamps
    end
  end
end
