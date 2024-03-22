import firebase_admin
from firebase_admin import credentials , firestore 



from bs4 import BeautifulSoup
from urllib.parse import urljoin


cred = credentials.Certificate("Add That Hear")

firebase_admin.initialize_app(cred)

db = firestore.client()

# data ={
#     "name":"Another",
#     "surName":"Another Surname"
# }

# doc_ref =   db.collection("nameCollection").document()

# print("Document Id :: ", doc_ref.id)




# dummy = '<span class="field-content"><a href="/smart-cities-mission-portal-ministry-urban-development">Smart Cities Mission Portal by Ministry of Urban Development</a></span>, <span class="field-content"><a href="/guidelines-integrated-development-commercial-floriculture-scheme">Guidelines for Integrated Development of Commercial Floriculture Scheme</a></span>, <span class="field-content"><a href="/social-defence-schemes-ministry-social-justice-and-empowerment">Social defence schemes of Ministry of Social Justice and Empowerment</a></span>, <span class="field-content"><a href="/schemes-and-programmes-differently-abled-ministry-social-justice-and-empowerment">Schemes and programmes for differently abled by Ministry of Social Justice and Empowerment</a></span>, <span class="field-content"><a href="/information-rashtriya-madhyamik-shiksha-abhiyan">Information on Rashtriya Madhyamik Shiksha Abhiyan</a></span>, <span class="field-content"><a href="/new-millennium-indian-technology-leadership-initiative-csir">New Millennium Indian Technology Leadership Initiative by CSIR</a></span>, <span class="field-content"><a href="/information-tax-holiday-scheme-micro-small-medium-enterprises-development-commissioner">Information on tax holiday scheme by Micro, Small &amp; Medium Enterprises Development Commissioner</a></span>, <span class="field-content"><a href="/information-schemes-students-madhya-pradesh">Information on schemes for students in Madhya Pradesh</a></span>, <span class="field-content"><a href="/paryavaran-vahini-scheme-ministry-environment-and-forests">Paryavaran Vahini Scheme by Ministry of Environment and Forests</a></span>, <span class="field-content"><a href="/information-schemes-department-education-gujarat">Information on schemes by Department of Education of Gujarat</a></span>, <span class="field-content"><a href="/information-schemes-petrochemical-department-chemical-and-petrochemical"> Information on  Schemes petrochemical by the Department of Chemical and Petrochemical</a></span>, <span class="field-content"><a href="/website-ministry-health-family-welfare">Website of Ministry of Health &amp; Family Welfare</a></span>, <span class="field-content"><a href="/information-biomass-gasifier-scheme-ministry-new-and-renewable-energy">Information on   Biomass Gasifier scheme by  The Ministry of New and Renewable Energy </a></span>, <span class="field-content"><a href="/information-indira-awaas-yojana">Information on Indira Awaas Yojana</a></span>, <span class="field-content"><a href="/information-vocational-training-centers-tribal-areas">Information on  Vocational training centers in tribal areas </a></span>'

# soup = BeautifulSoup(dummy, 'html.parser')
# texts = soup.find_all("span",class_="field-content")
# base_url="https://www.india.gov.in/"
# # # Extract links and corresponding text
# data = []

# for span in texts:
#     a_tag = span.find('a')
#     if a_tag:
#         link = a_tag.get('href')
#         text = a_tag.text
#         full_url = urljoin(base_url, link)
#         data.append({'Link': full_url, 'Text': text})
#         # print("Link", full_url)
#         # print("Text:", text)
#         # print()
data =[
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/smart-cities-mission-portal-ministry-urban-development', 'Text': 'Smart Cities Mission Portal by Ministry of Urban Development'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/guidelines-integrated-development-commercial-floriculture-scheme', 'Text': 'Guidelines for Integrated Development of Commercial Floriculture Scheme'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/social-defence-schemes-ministry-social-justice-and-empowerment', 'Text': 'Social defence schemes of Ministry of Social Justice and Empowerment'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/schemes-and-programmes-differently-abled-ministry-social-justice-and-empowerment', 'Text': 'Schemes and programmes for differently abled by Ministry of Social Justice and Empowerment'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/information-rashtriya-madhyamik-shiksha-abhiyan', 'Text': 'Information on Rashtriya Madhyamik Shiksha Abhiyan'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/new-millennium-indian-technology-leadership-initiative-csir', 'Text': 'New Millennium Indian Technology Leadership Initiative by CSIR'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/information-tax-holiday-scheme-micro-small-medium-enterprises-development-commissioner', 'Text': 'Information on tax holiday scheme by Micro, Small & Medium Enterprises Development Commissioner'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/information-schemes-students-madhya-pradesh', 'Text': 'Information on schemes for students in Madhya Pradesh'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/paryavaran-vahini-scheme-ministry-environment-and-forests', 'Text': 'Paryavaran Vahini Scheme by Ministry of Environment and Forests'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/information-schemes-department-education-gujarat', 'Text': 'Information on schemes by Department of Education of Gujarat'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/information-schemes-petrochemical-department-chemical-and-petrochemical', 'Text': ' Information on  Schemes petrochemical by the Department of Chemical and Petrochemical'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/website-ministry-health-family-welfare', 'Text': 'Website of Ministry of Health & Family Welfare'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/information-biomass-gasifier-scheme-ministry-new-and-renewable-energy', 'Text': 'Information on   Biomass Gasifier scheme by  The Ministry of New and Renewable Energy '},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/information-indira-awaas-yojana', 'Text': 'Information on Indira Awaas Yojana'},
     {'imgurl':"https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg",'Link': 'https://www.india.gov.in/information-vocational-training-centers-tribal-areas', 'Text': 'Information on  Vocational training centers in tribal areas '}]

# print(data)      
print("Started Uploading : ") 
collection_ref = db.collection('data111')
for item in data:
    document_ref = collection_ref.document()  # Generate a unique document ID
    document_ref.set({
        'description': item['Text'],
        'imgurl': item['imgurl'],  # Replace with actual image URLs if available
        'name': item['Text'],  # Extract first word as name
        'url': item['Link']
    })
    print("Docref iD : " , document_ref.id);

# doc_ref.set(data)
print("Done !")
     