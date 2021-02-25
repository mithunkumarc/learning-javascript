#### cross-origin resource sharing

Well, for security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. 

For example, 

        if you want to access your API hosted at https://api.github.com from your client-side frontend application 
        that is hosted at https://example.com, the browser will not allow this request to complete.

        The browsers enforce a security feature called Same Origin Policy. According to Same Origin Policy, 
        the Same Origin calls are allowed and Different Origin calls are not allowed.


You only need to think about CORS when:

        API accessed by the browser.
        API is hosted on a separate domain.
        
cors same origin policy : 

github.com --- can access ---- github.com/users

github.com --- cannot access --- api.github.com/user/some

#### What is this Same Origin, Different Origin? 

Let’s see this in more detail. 
Browsers define the Origin as a combination of Scheme, Host, and Port.

#### 1. Scheme name- 

        It is the protocol to be used to access the resource on the Internet. 
        The scheme names are followed by the three characters :// .
        The most commonly used protocols are http://, https://, ftp://, and mailto://.

#### 2. Hostname - 

        It is the address of the host where the resource is located. 
        A hostname is a domain name assigned to a host computer. 
        This is usually a combination of the host’s local name with its parent domain’s name. 
        For example, www.dev.to consists of the host’s machine name www and the domain name dev.to

        eg : 
        angular : sending req to backend server http://ipaddress:port/login
        at the same ipaddress:port backend server should be running

#### 3. Port Number - 

        Port is a communication endpoint where your application is run. 
        
#### If above three combinations of Scheme, Hostname, and Port are the same, then the browser identifies it as the Same Origin and the request gets completed.

#### source : 

https://www.educative.io/edpresso/how-cors-cross-origin-resource-sharing-works
