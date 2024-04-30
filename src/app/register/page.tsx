"use client"
 
import { Form, Input, Button } from 'antd';
import { User, registerUser } from '../utils/api-requests';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = async (values:any) => {
    try {
      const res = await registerUser(values);
     if(res.success){
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        showConfirmButton: false,
        timer: 1500
      });
      
      router.push("/login")
     }
 
    } catch (error) {
      console.error('Failed to register user:', error);
      Swal.fire({
       
        icon: "error",
        title: "Failed to register user",
        showConfirmButton: false,
        timer: 1500
      });

    
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col   md:flex-row md:space-x-8 w-full max-w-screen-lg px-4 shadow-lg shadow-[#ffa940] justify-center items-center">
      <div className="md:w-1/2   ">
          <h2 className="text-3xl font-bold mb-4">Welcome to our website!</h2>
          <p className="text-sm">Manage your projects efficiently with our intuitive dashboard. Keep track of tasks, assign team members, and monitor project progress all in one place.</p>
        </div>
        <Form
          className="md:w-1/2"
          form={form}
          name="register"
          onFinish={handleSubmit}
          initialValues={{ remember: true }}
        >
          <h2 className="text-2xl text-center my-3 font-bold">Please Register</h2>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%', background:"#ffa940"}}>
              Register
            </Button>

            <Link href='/login'>Have an account? <span className='text-blue-500'>Please login</span></Link>
          </Form.Item>
        </Form>
       
      </div>
    </div>
  );
};

export default RegisterPage;
