
require 'pact/provider/rspec'
# require_relative '../../app/bar_app.rb'
# Pact.service_provider "Animal Service" do
#
#   honours_pact_with 'lending App' do
#
    # This example points to a local file, however, on a real project with a continuous
    # integration box, you would use a [Pact Broker](https://github.com/pact-foundation/pact_broker) or publish your pacts as artifacts,
    # and point the pact_uri to the pact published by the last successful build.

    # pact_uri '../zoo-app/spec/pacts/zoo_app-animal_service.json'
  # end
# end
puts "fepdhapsdifhap"
Pact.service_provider "lending" do
  puts "test12344"
  honours_pact_with 'consumer-js' do
    pact_uri 'test/service_consumers/consumer-js-lending.json'
  end
end