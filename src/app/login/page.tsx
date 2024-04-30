
"use client"
import { Form, Input, Button } from 'antd';
 
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { loginUser } from '../utils/api-requests';
 

const LoginPage = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      const res = await loginUser(values);
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500
        });
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: res.message || "Failed to login",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error('Failed to login:', error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Failed to login",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row md:space-x-8 w-[500px]  h-[300px] -lg px-4 shadow-lg justify-center items-center  [#ffa940]">
        <Form
      
          form={form}
          name="login"
          onFinish={handleSubmit}
          initialValues={{ remember: true }}
        >
          <h2 className="text-2xl text-center my-3 font-bold">Please Login</h2>
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
            <Button type="primary" htmlType="submit" style={{ width: '100%', background:"#ffa940" }}>
              Login
            </Button>
            <Link href='/register'>Don&lsquo;t have an account? <span className='text-blue-500'>Register here</span></Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
