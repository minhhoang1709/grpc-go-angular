package main

import (
	"context"
	"log"
	"net"
	primary "sum-number/primary"

	_ "github.com/go-sql-driver/mysql"
	"google.golang.org/grpc"
)

type primaryServer struct {
}

func (s *primaryServer) SumNumber(c context.Context, req *primary.AddRequest) (*primary.AddResponse, error) {
	result := req.Number + req.AnotherNumber
	response := primary.AddResponse{
		Sum: int64(result),
	}
	return &response, nil
}

func newJsonRpcServer() *primaryServer {
	return &primaryServer{}
}

func main() {
	lis, err := net.Listen("tcp", "localhost:10000")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer()
	primary.RegisterPrimaryServer(grpcServer, newJsonRpcServer())
	grpcServer.Serve(lis)
}
