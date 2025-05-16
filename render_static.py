import os
import django
from django.test import Client
from django.conf import settings

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_website.settings')
django.setup()

# Simulate a request to the home view
client = Client()
response = client.get('/')

# Ensure the output directory exists
output_dir = 'dist'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Write the rendered HTML to a file
with open(os.path.join(output_dir, 'index.html'), 'w') as f:
    f.write(response.content.decode())